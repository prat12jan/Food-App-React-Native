import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',   
    headers : {
        Authorization: 'Bearer 1oayC_89GSaXyeVxzCiFOiF10Iwo_479Nge63Z_bvhnFEthoMOt2FUgIYNv0NPpmCG460o13y0xrWEEyE1kgASeJEC5Jrh6X_yADxD0o5EvdzhSAwFYRul_hMQ46YHYx'
    }
});