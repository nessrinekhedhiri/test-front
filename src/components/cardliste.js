import React  from 'react';
 const item=[
    {image:"",
     titre:"Lame commposite"
    },
    {image:"",
     titre:"Lame en bois",
    },
    {image:"",
    titre:"Panneau en bois"
   },
   {image:"",
   titre:"Grille rigide"
   },
   {image:"",
  titre:"Gabion"
   },
 ]
   const Card=()=>{
     return( <div className="card">
     <img src={this.props.img} />
     <div className="card-body">
       <h2>{this.props.title}</h2>
       </div>)
       </div>
 }
const ListeCrad = (props) => {
    return (  );
}
 
export default ListeCrad;