const Listo = ({nmbs,deleteOb}) => {
 const windowx = (id,name) =>{
      if(window.confirm(`delete ${name}?`)){
        deleteOb(id)  
      }
 }
    return(
    nmbs.map((n)=><li key={n.name}><div>{n.name} {n.number}<button onClick={()=>windowx(n.id,n.name)}>delete</button></div></li>) 
    )}
export default Listo