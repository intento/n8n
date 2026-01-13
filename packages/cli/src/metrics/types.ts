export type MetricCategory =
	| 'cache'
	| 'default'
	| 'logs'
	| 'node'
	| 'queue'
	| 'routes'
	| 'workflow'
	| 'workflowStatistics';

export type MetricLabel =
	| 'apiMethod'
	| 'apiPath'
	| 'apiStatusCode'
	| 'credentialsType'
	| 'nodeId'
	| 'nodeName'
	| 'nodeType'
	| 'workflowId'
	| 'workflowName';

export type Includes = {
	buckets: {
		nodeExecutionTime: number[];
		workflowExecutionTime: number[];
	};
	labels: Record<MetricLabel, boolean>;
	metrics: Record<MetricCategory, boolean>;
};
