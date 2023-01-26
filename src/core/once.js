import { useEffect } from 'react';

const Once = (cb) => useEffect(cb, []);

export default Once;
