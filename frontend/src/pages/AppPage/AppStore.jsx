import React, { Component } from "react";
import AppDetails from "../../components/AppList/AppDetails.jsx";
import Search from "./Search.jsx";
import { Store , StyledGrid , AppCard, AppMedia} from "./AppStore.styled";

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
          <AppMedia
            id={app.id}
            name={app.name}
            backgroundColor={app.color}
            color={app.textColor}
            />
        ));

      return (
        <Store>
          <Search
            contactsValue={this.state.searchTerm}
            onChangeHandler={this.onSearchHandler}
          />
          <StyledGrid container spacing={4}
            style={{padding: '5px'}}
            >
            {apps.map( app =>
              <AppCard key={app.id}
              item
              xs={10} sm={5} md={4} lg={3} xl={2}
              >
              {app}
              </AppCard> )}
          </StyledGrid>
      </Store>);
    }
}

export default AppStore;