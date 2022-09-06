import { connect } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import { select ,reset } from "./store/action"
// import { active } from "./store/cartAction"
import { useNavigate } from 'react-router-dom';
const Catagories = props =>{
    let navigate=useNavigate()
    return (
        <>
        <section>
        
        
            {props.catagories.map((person, idx) =>
            <div style={{ cursor: 'pointer', float: 'left' }} >
                <h4 key={idx} onClick={() => props.select(person.name)}> {person.name}   || -- </h4> 
                </div>
            )}
         
        <button onClick={() => props.reset()}>Reset Everything</button>
        <Button  onClick={()=>{navigate("/cart")}} style={{float: "right"}} color="warning" size="lg" >
      <FontAwesomeIcon icon={faCartArrowDown} />
      
      <span className="icon-button-text-right">{ props.count }</span>
    </Button>
    </section>
    
    </>
    )
}

const mapStateToProps = (state)=>({
    catagories : state.catagories.catagories,
    count : state.cartReducer.itemCount
})

const mapDispatchToProps = {select,reset}
export default connect(mapStateToProps,mapDispatchToProps)(Catagories)