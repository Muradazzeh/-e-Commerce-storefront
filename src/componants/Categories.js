import { connect } from "react-redux"
import { select ,reset } from "./store/action"
const Catagories = props =>{
    return (
        <section>
        
        
            {props.catagories.map((person, idx) =>
            <div style={{ cursor: 'pointer', float: 'left' }} >
                <h4 key={idx} onClick={() => props.select(person.name)}> {person.name}   || -- </h4> 
                </div>
            )}
         
        <button onClick={() => props.reset()}>Reset Everything</button>
    </section>
    )
}

const mapStateToProps = (state)=>({
    catagories : state.catagories.catagories
})

const mapDispatchToProps = {select,reset}
export default connect(mapStateToProps,mapDispatchToProps)(Catagories)