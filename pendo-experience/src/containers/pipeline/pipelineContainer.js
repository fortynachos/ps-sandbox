import { connect } from 'react-redux';
import Pipeline from '../../components/dashboard/pipeline.js';


const mapStateToProps = (state) => {
	return {
		pipelineData: state.PipelineReducer
	}
}



const FinalPipeline = connect(mapStateToProps)(Pipeline);


export default FinalPipeline;