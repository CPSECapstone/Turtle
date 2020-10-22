import React, { PureComponent } from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * Properties expected:
 * show: boolean
 * body: string
 * buttons: Array<string>
 */
export default class ErrDialog extends PureComponent {
   render() {
      return (
         <Modal show={this.props.show} onHide={
            () => this.props.onClose("Dismissed")}>
            <Modal.Header closeButton>
               <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="outlineError">
                    {this.props.body ?
                    this.props.body.split(",").map((err, i) => 
                     <div key={i}>{err}</div>)
                     : ''}
                </div>
            </Modal.Body>
            <Modal.Footer>
               {this.props.buttons.map((btn, i) => <Button key={i}
               onClick={() => this.props.onClose(btn.toString())}>{btn}
               </Button>)}
            </Modal.Footer>
         </Modal>
      )
   }
}
