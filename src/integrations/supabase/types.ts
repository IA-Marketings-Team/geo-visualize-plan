export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      clients: {
        Row: {
          created_at: string | null
          id: string
          logo_url: string | null
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
        }
        Relationships: []
      }
      company_info: {
        Row: {
          address: string
          country: string
          created_at: string | null
          email: string
          id: string
          linkedin_url: string | null
          phone: string
          youtube_url: string | null
        }
        Insert: {
          address: string
          country: string
          created_at?: string | null
          email: string
          id?: string
          linkedin_url?: string | null
          phone: string
          youtube_url?: string | null
        }
        Update: {
          address?: string
          country?: string
          created_at?: string | null
          email?: string
          id?: string
          linkedin_url?: string | null
          phone?: string
          youtube_url?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_processed: boolean | null
          message: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_processed?: boolean | null
          message: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_processed?: boolean | null
          message?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      department_services: {
        Row: {
          created_at: string | null
          department_id: string | null
          id: string
          service_name: string
        }
        Insert: {
          created_at?: string | null
          department_id?: string | null
          id?: string
          service_name: string
        }
        Update: {
          created_at?: string | null
          department_id?: string | null
          id?: string
          service_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "department_services_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          created_at: string | null
          description: string
          icon: string
          id: string
          image_src: string
          name: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          icon: string
          id?: string
          image_src: string
          name: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          icon?: string
          id?: string
          image_src?: string
          name?: string
          title?: string
        }
        Relationships: []
      }
      job_offers: {
        Row: {
          created_at: string | null
          description: string
          id: string
          is_active: boolean | null
          location: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          is_active?: boolean | null
          location: string
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          is_active?: boolean | null
          location?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          author: string
          category: string
          content: string | null
          created_at: string | null
          date: string
          excerpt: string
          id: string
          image: string
          title: string
        }
        Insert: {
          author: string
          category: string
          content?: string | null
          created_at?: string | null
          date: string
          excerpt: string
          id?: string
          image: string
          title: string
        }
        Update: {
          author?: string
          category?: string
          content?: string | null
          created_at?: string | null
          date?: string
          excerpt?: string
          id?: string
          image?: string
          title?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          client: string | null
          created_at: string | null
          description: string | null
          id: string
          image_src: string
          title: string
        }
        Insert: {
          category: string
          client?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_src: string
          title: string
        }
        Update: {
          category?: string
          client?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_src?: string
          title?: string
        }
        Relationships: []
      }
      rse_commitments: {
        Row: {
          content: string
          created_at: string | null
          icon: string
          id: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string | null
          icon: string
          id?: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string | null
          icon?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string | null
          description: string
          icon: string
          id: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          icon: string
          id?: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          icon?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
