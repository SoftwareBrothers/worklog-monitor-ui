export interface Worklog {
  id: string;
  issueKey: string;
  description: string;
  timeSpentSeconds: number;
  created: Date;
}

export function mapJsonToWorklog(data: any): Worklog {
  return {
    id: data.tempoWorklogId,
    issueKey: data.issue.key,
    description: data.description,
    timeSpentSeconds: data.timeSpentSeconds,
    created: new Date(data.createdAt),
  };
}
