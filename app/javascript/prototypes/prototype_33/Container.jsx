import React, { Component } from 'react';
import Button from './Button';
// import html2canvas from "html2canvas";

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initSketch(() => {
      this.props.hueChange('sketch');
    });
  }


  /////Action bouton refresh

  handleRefresh = () => {
    // let numbers = ['1', '2', '3', '4', '5']
    // let numb = sample(numbers)
    
    // const colorChange = document.getElementById('defaultCanvas0')
    // let classHueChange = 'hue'+numb
    
    // colorChange.classList.add(classHueChange)
    window.location.reload();
  }

  // hueChange = () => {
  //   window.location.reload();
  //   let numbers = ['1', '2', '3', '4', '5']
  //   let numb = sample(numbers)
    
  //   const colorChange = document.getElementById('defaultCanvas0')
  //   let classHueChange = 'hue'+numb
    
  //   colorChange.classList.add(classHueChange)
  // }

  // RealoadPage = () => {
  //   return new Promise((resolve, reject) => {
  //     window.location.reload();
  //     resolve()
  //   })
  // }

  // generateStory = () => {
  //   RealoadPage()
  //     .then(hueChange)
  // }

  //////////////////////////////////////////////////
  
//  DownloadImage = () => {
//     html2canvas(document.getElementById("cover")).then(function (canvas) {
//       let a = document.createElement("a");
//       a.href = canvas.toDataURL("image/jpeg");
//       a.download = `Cover-41-${generateHash()}.jpeg`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     });
//   };

  ////////////////////////////////////////////////////////////////

  render() {

    return (
      <div className="menu">
        <Button
          text="ЗАГРУЗИТЬ ТРЕК"
          className="button-left"
          handleClick={this.handleRefresh}
        />
        <Button
          text="ПОКАЗАТЬ ЛОКАЛИЗАЦИЯ"
          className="button-right"
          handleClick={this.geoLoca}
        />
      </div>
    )
  }
}