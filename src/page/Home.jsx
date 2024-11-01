import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

const URL = "http://localhost:3000";

export default function Home() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    function getData() {
        axios.get(`${URL}/posts`).then((res) => setData(res.data));
    }
    useEffect(() => {
        getData();
    }, []);

    function handlePost() {
        axios({
            method: "POST",
            url: `${URL}/posts`,
            data: {
                title: value,
                views: nanoid(),
            },
        }).then(() => getData());
    }

    function handleDelete(id) {
        axios({
            method: "DELETE",
            url: `${URL}/posts/${id}`,
        }).then(() => getData());
    }

    function handleEdit(id) {
        const newData = prompt("");
        axios({
            method: "PUT",
            url: `${URL}/posts/${id}`,
            data: {
                title: newData,
                views: nanoid(),
            },
        }).then(() => getData());
    }

    return (
        <div style={{ height: "300px", paddingTop: "50px" }}>
            <h1>Home</h1>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={handlePost}>btn</button>
            {data?.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.views}</p>
                        <button onClick={() => handleDelete(item.id)}>
                            delete
                        </button>
                        <button onClick={() => handleEdit(item.id)}>
                            edit
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
