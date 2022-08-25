import { useState } from "react";
import api from "../api";
import swal from "sweetalert";

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllProduct = async (page, limit, sortBy, order) => {
    try {
      setIsLoading(true);
      const res = await api.getAll(page, limit, sortBy, order);
      setData(res.data);
    } catch (err) {
      swal("error", err, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, data, getAllProduct];
};

export const useDetailProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getProductDetail = async (id) => {
    try {
      setIsLoading(true);
      const res = await api.getById(id);
      setData(res.data);
    } catch (err) {
      swal("error", err, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, data, getProductDetail];
};
