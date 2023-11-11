import React, {Component} from "react";


class Output extends Component {

    state ={  }
    render() {
        return(
          <div class="card">
            <img src="logo192.png" class="card-img-top" width="128px" height="128px" alt="..."/>

            <div class="card-body">
              <h5 class="card-title">Rezeptname</h5>
              <p class="card-text">Kurzbeschreibung</p>
              <a href="#" class="btn btn-primary">Zum Rezept</a>
            </div>
          </div>);
    }
  }
 
export default Output;