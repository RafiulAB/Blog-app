"use client";

import { initialBlogFormData } from "@/utils";
import { Blog, BlogFormData } from "@/utils/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResults: Blog[];
  setSearchResults: Dispatch<SetStateAction<Blog[]>>;
};

const initaialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext<ContextType>(initaialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialBlogFormData);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, formData, setFormData,  searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults, }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
