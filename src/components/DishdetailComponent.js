import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor (props) {
        super(props);
 
    }
    renderDish(selectedDish)
    {
        if (selectedDish != null) {
            return(
           
                <div key={selectedDish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
        
            );
        }
        else
        {
            return(
                <div> </div> 
                );
        }
    }

    renderComments(selectedDish) {
    
        if (selectedDish != null) {
          const commentDetails = selectedDish.comments.map((dishComments) => {
            return (
                
              <li key={dishComments.id} className="comment">
                <p>{dishComments.comment}</p>
                <p>-- {dishComments.author} ,&nbsp;
                {new Intl.DateTimeFormat('en-US', {year:'numeric',month: 'short',day: '2-digit'}).format(new Date(Date.parse(dishComments.date)))}  </p>
              </li>
            );
          });
          return (
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">{commentDetails}</ul>
            </div>
          );
        } else {
          return <div></div>;
        }
      }
    

    render() {
        const selectedDish = this.props.selectedDish;
        return (
                <div className="row">
                    {this.renderDish(selectedDish)}
                    {this.renderComments(selectedDish)}
                </div>               
  
        ); 
    }
} 

export default DishDetail;