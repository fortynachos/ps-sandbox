
let initialPipelineStateData = [
      {name: 'Qualification', value: 6000},
      {name: 'Discovery', value: 5000},
      {name: 'Solution Presentation', value: 4000},
      {name: 'Vendor Acceptance', value: 3000},
      {name: 'Proposal Review', value: 2000},
      {name: 'Pending Approval', value: 1000}
];

// This recenters the pipeline graph no matter what the numbers change to
const PipeCenterifier = (pipelineData) => {
      let results = pipelineData.map(data => {
            return data.value
      });
      let maxValue = Math.max.apply(null, results);

      let valuesArray = [[0, maxValue]];

      for (var i = 1; i < results.length; i++) {
            var high = (maxValue/2) + (results[i]/2);
            var low = (maxValue/2) - (results[i]/2);

            valuesArray.push([low,high]);
      }

      return valuesArray;
}

let centeredValuesForBarChart = PipeCenterifier(initialPipelineStateData);

for (var i = 0; i < centeredValuesForBarChart.length; i++) {
      initialPipelineStateData[i].value = centeredValuesForBarChart[i];
}


const PipelineReducer = (state = initialPipelineStateData, action) => {
	switch (action.type) {
		default:
			return state;
	}
}



export default PipelineReducer;