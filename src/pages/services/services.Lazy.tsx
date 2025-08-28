import React from 'react';
import { lazy } from "react";

export const LazyServices = lazy( () => import('./Services'))