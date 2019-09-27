import { Worklog } from './Worklog';

export interface Member {
  id: string;
  name: string;
  isWorking: boolean;
  picture: string;
  worklogs?: Worklog[];
}
