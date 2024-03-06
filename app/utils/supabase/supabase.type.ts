export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      back_tech: {
        Row: {
          id: string;
          project_id: string;
          tech_title: string;
        };
        Insert: {
          id?: string;
          project_id?: string;
          tech_title: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          tech_title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_back_tech_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
        ];
      };
      contribute: {
        Row: {
          context: string;
          id: string;
          project_id: string;
        };
        Insert: {
          context: string;
          id?: string;
          project_id?: string;
        };
        Update: {
          context?: string;
          id?: string;
          project_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_contribute_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
        ];
      };
      front_tech: {
        Row: {
          id: string;
          project_id: string;
          tech_title: string;
        };
        Insert: {
          id?: string;
          project_id?: string;
          tech_title: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          tech_title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_front_tech_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
        ];
      };
      project: {
        Row: {
          duration: string;
          github: string;
          id: string;
          main_feature: string;
          sub_detail: string;
          title: string;
          url: string;
        };
        Insert: {
          duration: string;
          github: string;
          id?: string;
          main_feature: string;
          sub_detail: string;
          title: string;
          url: string;
        };
        Update: {
          duration?: string;
          github?: string;
          id?: string;
          main_feature?: string;
          sub_detail?: string;
          title?: string;
          url?: string;
        };
        Relationships: [];
      };
      trouble_shooting: {
        Row: {
          id: string;
          problem: string;
          process: string;
          project_id: string;
          result: string;
          title: string;
        };
        Insert: {
          id?: string;
          problem: string;
          process: string;
          project_id?: string;
          result: string;
          title: string;
        };
        Update: {
          id?: string;
          problem?: string;
          process?: string;
          project_id?: string;
          result?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_trouble_shooting_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views'])
    ? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
