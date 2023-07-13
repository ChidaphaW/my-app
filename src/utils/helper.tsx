import { useMemo } from "react";
import queryString from "query-string";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
const params = useParams();
const location = useLocation();
const navigate = useNavigate();

return useMemo(() => {
return {
push: navigate,
pathname: location.pathname,
query: {
...queryString.parse(location.search.slice(1)),
...params,
},
location,
navigate,
};
}, [location, navigate, params]);
};
