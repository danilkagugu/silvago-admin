import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";
import { log } from "console";

const apiUrl = "http://localhost:3030/api/admin";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    console.log("url: ", url);
    const { data } = await axios.get(url);
    if (!Array.isArray(data)) {
      throw new Error("Data items is not an array");
    }
    return {
      data: data.map((item) => ({ ...item, id: item._id })),
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/one/${params.id}`;
    console.log("url: ", url);
    const { data } = await axios.get(url);
    // console.log("data: ", data);
    return { data };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, { signal: params.signal });
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });
    return {
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    };
  },

  create: async (resource, params) => {
    const url = `${apiUrl}/${resource}/`;

    const formData = new FormData();
    for (const key in params.data) {
      if (params.data.hasOwnProperty(key)) {
        if (key === "image" && params.data[key].rawFile) {
          formData.append(key, params.data[key].rawFile);
        } else if (key === "volumes") {
          formData.append(key, JSON.stringify(params.data[key]));
        } else if (key === "characteristics") {
          formData.append(key, JSON.stringify(params.data[key]));
        } else if (key === "filters") {
          formData.append(key, JSON.stringify(params.data[key])); // Додаємо filters
        } else {
          formData.append(key, params.data[key]);
        }
      }
    }

    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { data: { ...data, id: data._id } };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const formData = new FormData();
    for (const key in params.data) {
      if (params.data.hasOwnProperty(key)) {
        if (key === "image" && params.data[key]?.rawFile) {
          formData.append(key, params.data[key].rawFile);
        } else {
          formData.append(key, params.data[key]);
        }
      }
    }

    const { data } = await axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { data: { ...data.data, id: data.data.id || data.data._id } };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    console.log(params.previousData);
    const url = `${apiUrl}/${resource}/delete/${params.id}`;
    console.log("url: ", url);
    const { data } = await axios.delete(url);
    console.log("data: ", data);
    return { data };
    // const url = `${apiUrl}/${resource}/${params.id}`;
    // const { json } = await httpClient(url, {
    //   method: "DELETE",
    // });
  },

  deleteMany: async (resource, params) => {
    const url = `${apiUrl}/${resource}/delete-many?ids=${params.ids.join(",")}`;
    console.log("url: ", url);
    await axios.delete(url);
    return { data: [] };
  },
} as DataProvider;
