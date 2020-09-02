
import React, { useState } from 'react';
import useDebounce from './../hooks/Hooks';
import TextField from '@material-ui/core/TextField';
import GitUser from './GitUser';
import Sanitize from '../helpers/Helpers';

export default function GitSearch(): JSX.Element {
  const [query, setQuery] = useState("");
  const [value, setValue] = useDebounce<string>("", (v) => sanitizeAndQuery(v));

  const sanitizeAndQuery = (value: string) => {
    setQuery(Sanitize(value));
  };

  return (
    <>
      <TextField
        id="standard-full-width"
        label="GitHub user search"
        style={{ margin: 8 }}
        placeholder="Enter GitHub username"
        fullWidth
        margin="normal"
        value={value || ""}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      {query && <div style={{ marginBottom: 16 }}><GitUser login={query} /></div>}
    </>
  );
}