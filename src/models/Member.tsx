import {mapJsonToWorklog, Worklog} from './Worklog';

export interface MemberInterface {
  id: string;
  name: string;
  picture: string;
  worklogs: Worklog[];
}

interface preWorklog {
  tempoWorklogId: string,
  issue: {
    key: string
  }
  description: string,
  timeSpentSeconds: number,
  createdAt: string
}

export class Member implements MemberInterface {
  public id: string;
  public name: string;
  public picture: string;
  public worklogs: Worklog[];

  constructor(member: any, worklogs?: preWorklog[]) {
    this.id = member.id;
    this.name = `${member.firstName} ${member.lastName}`;
    this.picture = member.picture;
    this.worklogs = worklogs ? worklogs.map(mapJsonToWorklog): [];

  }

}
