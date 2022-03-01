import React from "react";

const varia = "Perro";

class HelloMessage extends React.Component {
    
    render() {
      return (
        <div>
          Hola {this.props.name}
          <br/>
          Me siento {this.props.estadoAnimo}
          {varia}
        </div>
      );
    }
  }

export default HelloMessage;