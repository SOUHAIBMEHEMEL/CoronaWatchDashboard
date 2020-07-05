import React from "react";
import ReactDOM from 'react-dom';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import PublishIcon from '@material-ui/icons/Publish';
import Button from '@material-ui/core/Button';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import axios from 'axios';

const token= localStorage.getItem('token') ;

class addform extends React.Component {
  state = {
    title: "",
    content: "",
    images: [],
    videos: [],
    writer: "WRITER",
    timestamp: null,
  }




  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    })

  }

  changeContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  changeImages = (event) => {
    this.state({
      images: this.state.images.push(event.target.files[0])
    }
    )

  }

  ImageSelector = event => {
    console.log(event.target.files[0]);
    this.setState({
      imgs: event.target.files[0]
    })
    var filesInput = document.getElementById("images");
    var picReader = new FileReader();
    if (filesInput.files[0])
    {
      var picFile = filesInput.files[0];
      alert(picFile.name) ;
    }
    else alert('aucune image choisie');
  }

  VideoSelector = event => {
    console.log(event.target.files[0]);
    this.setState({
      videos: event.target.files[0]
    })
    var filesInput = document.getElementById("videos");
    var picReader = new FileReader();
    if (filesInput.files[0])
    {
      var picFile = filesInput.files[0];
      alert(picFile.name) ;
    }
    else alert('aucune vidéo choisie');
  }

  addfile = () => {
    var para = document.getElementById('files');
    para.innerHTML += "<div><input onChange={this.fileSelector} name='mediaArticle' type='file'></input></div>";

  }


  onload1 = () => {
    var classes = this.props.style;

    if (window.File && window.FileList && window.FileReader) {


      var filesInput = document.getElementById("images");

      var picReader = new FileReader();
      picReader.addEventListener("change", function (event) {
        var output = document.getElementById("result");
        var picFile = filesInput.files[0];
        var div = document.createElement("div");
        div.innerHTML = "<img class='" + classes.media + "' src='" + picFile.result + "'" +
          "title='" + picFile.name + "'/>";
        output.insertBefore(div, null);
      });
      Object.defineProperty(filesInput.files[0], 'name', {
        writable: true,
        value: "image_" + this.state.nbphotos + 1
      });
      var x = this.state.images;
      x.push(filesInput.files[0]);
      this.setState({
        nbphotos: this.state.nbphotos + 1,
        images: x
      });

    }
    console.log(this.state.images);
    console.log(Array.from(this.state.images));
  }





  onload = () => {
    var classes = this.props.style;
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
      var filesInput = document.getElementById("images");
      filesInput.addEventListener("load", function (event) {

        var files = event.target.files; //FileList object

        for (var i = 0; i < files.length; i++) {

          var file = files[i];
          //Only pics
          if (!file.type.match('image'))
            continue;
          var picReader = new FileReader();
          picReader.addEventListener("load", function (event) {
            var picFile = event.target;
            var div = document.createElement("div");
            Object.defineProperty(file, 'name', {
              writable: true,
              value: "image_" + i
            });
            div.innerHTML = "<img class='" + classes.media + "' src='" + picFile.result + "'" +
              "title='" + picFile.name + "' />";
            var output = document.getElementById("result");
            output.innerHTML(div);
          });
          //Read the image
          picReader.readAsDataURL(file);
        }
      });
    }
    else {
      console.log('Your browser does not support File API');
    }


  }

   submitAddArticleForm = () => {
    const timestamp = new Date().getTime();
    const now = new Date(timestamp);
    this.setState({
        timestamp : new Date(timestamp) ,
    })
    
    console.log(this.state) ;
    console.log(JSON.stringify(this.state)) ;
    fetch('https://corona-watch-esi.herokuapp.com/content/articles/', {
        method : 'POST',
      headers: {'Content-Type': 'application/json' ,'Authorization': `Bearer ${token}` },
      body: JSON.stringify(this.state)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.id);
        alert("Article ajouté avec succes ! ");  
      }
    )
    .catch( error => {
        console.error(error);
        alert("Une erreur s'est produite ! réessayer ");
    })
      
  }


  render() {

    const timestamp = new Date().getTime();
    const now = new Date(timestamp);
    let auteur = this.state.writer;
    var imglist = Array.from(this.state.images);



    const classes = this.props.style;
    return (
      <form id="form" action="https://corona-watch-esi.herokuapp.com/content/articles/" method="post" enctype="multipart/form-data">
        <div class="card-body">
          <div class="form-group">
            <div class="input-group">
              <input name="title" type="text" class="form-control" id="title" placeholder="Titre de l'article" onChange={this.changeTitle} value={this.state.title} required />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <textarea name="content" class="form-control" placeholder="Contenu de l'article" required onChange={this.changeContent} value={this.state.content}></textarea>
            </div>
            <span className="Controls">
              <label for="images">
                <ImageSearchIcon className={classes.button} />
              </label>
              <label for="videos">
                <VideoLibraryIcon className={classes.button}/>
              </label>
              <Button><FormatBoldIcon /></Button>
              <Button><FormatItalicIcon /></Button>
              <Button><FormatUnderlinedIcon /></Button>
            </span>
          
          <div class="form-group" style={{ display: "none" }}>

            <div class="input-group">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <input id="images" onChange={this.ImageSelector} name='images' type='file' accept="image/*" style={{ display: "none" }} />

                  {/*
              <Button
                 variant="contained"
                 className={classes.button}
                 onClick = {this.onload1}
              >
                  Confirmer l'ajout
            </Button>*/ }




                  <output id="result" />
                </div>
              </div>

            </div>

            <div class="input-group">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <input id="videos" onChange={this.VideoSelector} name='videos' type='file' accept="video/*" style={{ display: "none" }}></input>

                </div>
              </div>
            </div>
            {
              // <Button id="addfilebutton" onClick={this.addfile}><PhotoLibraryIcon /></Button>
            }
          </div>
          <input hidden name="writer" value={auteur} />
          <input hidden name="virified" value={false} />
          <input hidden name="timestamp" value={now} />
          <input hidden name="imgs" value={imglist} />

          <Button
              name="submit"
              //type="submit"
              variant="contained"
              color="btn btn-light"
              className={classes.button}
              onClick={this.submitAddArticleForm}
              endIcon={<PublishIcon />}
              style={{borderRadius:'25px'}}

            >
              Publier
            </Button>

            </div>



          <div class="text-center">
            { /*
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              type="Reset"
            >
              Annuler
            </Button>
            */}
            
          </div>
        </div>
      </form>
    )

  }
}

export default addform;
