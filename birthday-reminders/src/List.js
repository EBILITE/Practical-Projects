import React from 'react';

const List = ({id,name,age, image}) => {
  return (
    <>
     <div>
       <div>
         <img src={image} alt={name}/>
       </div>
       <div>
         <h2>{name}</h2>
         <h4>{age}</h4>
       </div>
     </div>
    </>
  );
};

export default List;
