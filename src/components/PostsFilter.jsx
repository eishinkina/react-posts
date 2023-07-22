import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostsFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(event) => setFilter({...filter, query: event.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Cортировка"
        options={[
          {
            value: "title",
            name: "По названию",
          },
          {
            value: "body",
            name: "По описанию",
          },
        ]}
      />
    </div>
  );
};

export default PostsFilter;
