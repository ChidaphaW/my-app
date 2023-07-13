import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const queryClient = new QueryClient();

const App = () => {

  const isInitial = useRef(false);
  useEffect(() => {
    if(!isInitial.current){
      queryClient.setDefaultOptions({
        queries:{
          cacheTime:2*60*1000,
          staleTime:30*1000,
          refetchOnWindowFocus:false,
          refetchOnReconnect:false,
          retry:1,
        },
        mutations:{
          retry:0,
        }
      })
    }
  })
 
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
      </ThemeProvider>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
};

export default App;
