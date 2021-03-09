import React, { Component } from "react";
import AppDetails from "../../components/AppList/AppDetails.jsx";
import Grid from '@material-ui/core/Grid';
import ComponentCard from './AppCard.jsx';
import Search from "./Search.jsx";


class AppStore extends Component {
    state = {
      searchTerm: "",
      apps: []
    };

    componentDidMount() {
      this.setState({
        apps: AppDetails
      });
    }

    onSearchHandler = e => {
      this.setState({
        searchTerm: e.target.value
      });
    };

    render() {
      //search using filter function
      const toSearch = searchTerm => item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase());
  
      const apps = this.state.apps
        .filter(toSearch(this.state.searchTerm))
        .map(app => (
          <ComponentCard
            id={app.id}
            name={app.name}
            backgroundColor={app.color}
            color={app.textColor}
            />
        ));

      return (
        <div className="AppStore">
          <Search
            contactsValue={this.state.searchTerm}
            onChangeHandler={this.onSearchHandler}
          />
          <Grid className='grid' container spacing={4}
            style={{padding: '5px'}}
            >
            {apps.map( app =>
              <Grid key={app.id}
              item
              xs={8} sm={4} md={3} lg={2} xl={1}
              >
              {app}
              </Grid> )}
          </Grid>
      </div>);
    }
}

export default AppStore;