export interface Trouble_shooting {
  id: string;
  project_id: string;
  title: string;
  problem: string;
  process: string;
  result: string;
}

export interface Front_tech {
  id: string;
  project_id: string;
  tech_title: string;
}

export interface Project_img {
  id: string;
  project_id: string;
  url: string;
}

export interface Back_tech {
  id: string;
  project_id: string;
  tech_title: string;
}

export interface Contribute {
  id: string;
  project_id: string;
  title: string;
  context: string;
}

export interface Project {
  id: string /* primary key */;
  duration: string;
  title: string;
  sub_detail: string;
  main_feature: string;
  url: string;
  github: string;
  front_tech?: Front_tech[];
  back_tech?: Back_tech[];
  contribute?: Contribute[];
  trouble_shooting?: Trouble_shooting[];
  project_img?: Project_img[];
}

export interface Join_Trouble_shooting extends Trouble_shooting {
  project?: Project;
}

export interface Join_Front_tech extends Front_tech {
  project?: Project;
}

export interface Join_Project_img extends Project_img {
  project?: Project;
}

export interface Join_Back_tech extends Back_tech {
  project?: Project;
}

export interface Join_Contribute extends Contribute {
  project?: Project;
}
