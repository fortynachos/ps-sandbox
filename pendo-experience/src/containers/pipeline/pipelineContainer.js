import { connect } from 'react-redux';
import Forecast from '../../components/dashboard/forecast.js';


const mapStateToProps = (state) => {
	return {
		pipelineData: state.PipelineReducer
	}
}



const FinalPipeline = connect(mapStateToProps)(Forecast);


export default FinalPipeline;