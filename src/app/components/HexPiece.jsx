import React from 'react';
import { Hexagon } from 'lucide-react';

const PieceIcon = ({ type, color }) => {
  const paths = {
    ant: "M216 21.23s-5.1 9.96-9.7 22.52c-4.5 12.57-9.4 27.36-7.2 40.96 2.2 13.16 11 25.19 19 35.29.1.2.2.3.4.4 0-.1.1-.2.2-.3 3.6-5 7.4-9.8 11.4-14.1-6.5-8.69-12.4-18.93-13.2-24.18-1-6.21 2.2-20.41 6.4-31.89 4.2-11.49 8.7-20.63 8.7-20.63zm80.1.17l-16 8.08s4.5 9.14 8.7 20.63c4.2 11.48 7.4 25.68 6.4 31.89-.8 5.14-6.6 15.18-13 23.8 4.1 4.4 7.9 9.3 11.6 14.4l.1-.1c8-10 16.9-22.04 19.1-35.21 2.2-13.6-2.7-28.39-7.2-40.96-4.6-12.56-9.7-22.52-9.7-22.52zM82.38 106.6l-4.8 17.4s15.14 4.2 32.52 10.2c16.7 5.7 35.5 13.8 43 19.3 15.7 30.7 32.4 48 62 77.7-.1-1.4-.1-2.7-.1-3.9 0-6.3.1-13.3 1.3-20.6-22.6-22.9-35.3-37.5-48.2-63.4l-.9-1.8-1.5-1.2c-11.8-9.5-31.7-16.9-49.7-23.1-18.01-6.3-33.62-10.6-33.62-10.6zm347.22 0s-15.6 4.3-33.6 10.6c-18 6.2-37.9 13.6-49.7 23.1l-1.5 1.2-.9 1.8c-12.9 26-25.5 40.5-48.2 63.5 1.2 7.3 1.3 14.2 1.3 20.5 0 1.2 0 2.6-.1 4 29.6-29.7 46.3-47.1 62-77.8 7.5-5.5 26.3-13.6 43-19.3 17.4-6 32.5-10.2 32.5-10.2zm-173.7 1.8c.1.1-3.7 1.4-8.1 5.3-4.6 4.1-9.8 10.2-14.5 16.8-4.7 6.6-9 13.8-11.9 20-3 6.1-4.4 11.8-4.4 12.8s.7 3.1 3.1 5.9c2.3 2.7 6.1 5.7 10.5 8.4 8.8 5.3 20.4 8.7 25.4 8.7s16.6-3.4 25.4-8.7c4.4-2.7 8.2-5.7 10.5-8.4 2.4-2.8 3.1-4.9 3.1-5.9 0-1.1-1.3-6.7-4.2-12.8-2.8-6.2-7-13.2-11.6-19.8-4.6-6.5-9.7-12.6-14.3-16.7-4.5-4-8.4-5.5-9-5.6zm-19.6 91.9c-3.4 8.4-3.3 16.8-3.3 27 0 6.5 1.9 22.5 5.7 37.8 1.6 6.4 3.7 12.7 5.9 18.3 3.7-.7 7.5-1.1 11.4-1.1 3.9 0 7.7.4 11.4 1.1 2.2-5.6 4.3-11.9 5.9-18.3 3.8-15.3 5.7-31.3 5.7-37.8 0-10.2.1-18.6-3.3-27-6.7 2.5-13.4 4-19.7 4-6.3 0-13-1.5-19.7-4zm-99.3 18l-1.7 6.8c-15.7 62.6-47.8 126-77.68 155.8l12.72 12.8c32.86-32.9 63.56-94.1 80.36-157 21.8 1.7 44.7 11 68.2 22.3-1.6-7.9-2.7-15.3-3.3-21.6-23.1-10.7-46.8-19.1-71.6-19.1zm231 0c-24.7 0-48.5 8.5-71.6 19.1-.6 6.3-1.7 13.7-3.3 21.7 23.5-11.4 46.4-20.7 68.2-22.4 16.8 62.9 47.5 124.1 80.3 157l12.8-12.8c-29.9-29.8-62-93.2-77.7-155.8l-1.7-6.8zm-148 45.6c-22.1 20.8-43.9 41.3-64 51.3l-5 2.5v5.6c0 61.9-3.4 83.1-14.8 122.4l-45.21 30.1 10.01 15 50.7-33.8.9-3.2c12-40.9 16-65.3 16.3-125.2 19.5-10.9 38.3-27.7 56.4-44.8-1.5-4.7-2.8-9.5-4-14.3-.5-1.9-.9-3.7-1.3-5.6zm72 0c-.4 1.8-.8 3.7-1.3 5.6-1.2 4.8-2.5 9.6-4 14.3 18.1 17.1 36.9 33.9 56.4 44.8.2 59.9 4.3 84.3 16.3 125.2l.9 3.2 50.7 33.8 10-15-45.2-30.1c-11.4-39.3-14.8-60.5-14.8-122.4v-5.6l-5-2.4c-20.1-10-41.8-30.6-64-51.4zm-36 36.4c-13 0-27.4 6.9-38.2 15.9-5.4 4.5-9.9 9.5-12.8 13.8-2.9 4.4-4 8.3-4 9.3 0 40.9 27.2 98.5 55 130.4 27.8-31.9 55-89.5 55-130.4 0-1-1.1-4.9-4-9.3-2.9-4.3-7.4-9.3-12.8-13.8-10.8-9-25.2-15.9-38.2-15.9z",

    queen: "M273.625 17.438l3.313 19.406L258.53 40l-3.717-21.594c-11.894 1.303-21.9 3.848-30.188 7.344L238.5 43.375l-14.688 11.563-15.343-19.5c-9.837 8.29-15.64 18.988-17.657 32.156l24.375-1.344 1.03 18.656-12.812.72c36.685 31.72 70.686 71.3 102.125 122.718 3.52-.453 7.054-.697 10.564-.72 2.396-.014 4.774.055 7.156.25 3.744.31 7.462.914 11.125 1.782 10.252-71.962-6.85-130.822-38.5-191.062-7.863-.71-15.335-1.137-22.25-1.157zM78.905 27.813C72.95 32.37 67.494 36.937 62.5 41.5l18.47 17.875-13 13.406-18.657-18.03c-9.15 10.155-16.053 20.23-20.907 30.125l20.125 4.72-4.28 18.218-22.438-5.282c-.528 2.05-.986 4.073-1.343 6.095-2.264 12.796-1.332 25.318 2.593 37.47l22.968-11.19 8.157 16.814-23.53 11.436c4.11 7.18 9.307 14.198 15.562 21.063 3.188 3.5 6.67 6.913 10.405 10.28l15.125-16.28 13.688 12.75-14.25 15.31c10.718 7.82 22.952 15.15 36.562 21.814l10.47-20.125 16.56 8.624-10 19.22c9.974 4.158 20.545 7.945 31.657 11.405l6.657-19.407 17.687 6.062-6.343 18.5c10.976 2.874 22.408 5.395 34.25 7.53l3.157-19.03 18.437 3.063-3.155 18.937c22.212 3.138 45.688 4.95 70.188 5.188l-.188 18.687c-20.204-.195-39.78-1.404-58.594-3.5-1.978 7.395-3.443 15.514-4.25 24.438-99.17-72.015-189.613 29.593-213.843 140 96.828 62.17 166.47 12.61 216.094-69.844l17.532 40.125 17.125-7.5-23.156-52.97c4.207-7.892 8.265-16.012 12.157-24.28 7.755 11.174 16.53 18.968 25.688 23.655l1.03 32.97.126 4.25 3.314 2.686 38.406 31.314 11.813-14.5-35.094-28.625-.72-22.75c11.463.746 22.9-2.88 33.125-10.345l.72 26.906.186 6.19 5.783 2.25 62.28 24.092 6.75-17.437-56.468-21.813-1.094-39.625c2.924-4.387 5.622-9.2 8-14.468 14.34 60.238 86.187 63.25 103.126 7.936 11.726-38.29-19.33-72.846-52.562-72l-10.156-47.25c29.243 7.773 54.154 23.793 73.906 55.906l15.906-9.78c-25.456-41.388-61.373-60.69-100.375-67.595l-13.688-2.406 2.938 13.564 13.25 61.812c-.644.294-1.298.58-1.938.906l-.062.032c-2.39.595-4.74 1.456-7 2.656-4.883 2.592-8.73 6.348-11.625 10.78-9.013-28.358-34.47-46.61-61.406-49.31 3.698 6.412 7.374 12.98 11 19.75l-16.47 8.81C243.755 130.22 169.122 70.843 78.907 27.813zM402.282 276.75c.325-.002.638.013.97.03 2.656.148 5.576.97 8.75 2.564 6.348 3.188 13.04 9.53 17.656 18.22 4.617 8.686 6.13 17.77 5.22 24.81-.912 7.04-3.827 11.552-7.97 13.75-4.142 2.2-9.527 2.096-15.875-1.093-6.347-3.187-13.038-9.53-17.655-18.217-4.617-8.688-6.13-17.773-5.22-24.813.912-7.04 3.827-11.55 7.97-13.75 1.812-.962 3.89-1.485 6.156-1.5z",
    
    spider: "M255.9 20.45c-54.1 0-98 93.45-98 146.85 0 31 14.9 58.6 37.9 76.3 5.9-6.9 12.2-12.9 19-17.7 13.7-7.9 27.8-13.9 41.1-14.1 14.4 0 28.4 5 41.2 14.1 6.7 4.8 13.1 10.8 19 17.7 23-17.7 37.8-45.3 37.8-76.3 0-53.4-43.9-146.85-98-146.85zm236.9 14.27L419.3 208.1 329.2 262c3.2 5.2 6 10.6 8.6 16.2l96.1-57.4 58.9-139.03V34.72zm-473.72 0v47.05L78.01 220.8 174.1 278c2.6-5.6 5.5-11 8.6-16.2l-90.13-53.7zM255.9 227.8c-10.7 0-21.3 3.6-31.8 11.1-10.8 8.9-19.9 19-26.1 28.6-14.9 23.5-24 54.4-24 81.5 0 26.6 8.4 47.2 24 61 14 12.4 33.8 19.3 57.9 19.3s43.9-6.9 58-19.3c15.5-13.8 24-34.4 24-61 0-27.1-9.1-58-24.1-81.5-7.8-12.3-16.6-21.9-26-28.6-10.5-6.2-21.5-10.9-31.9-11.1zM19.08 238.5v23.4l64.42 51.2 76.6 10.6c1-6 2.3-12 3.9-18l-73-10.1-71.92-57.1zm473.72 0l-71.9 57.1-73.1 10.2c1.7 5.9 3 11.9 4 18l76.6-10.7 64.4-51.2v-23.4zM353.7 355.1c-.3 6.4-1 12.5-2.2 18.3l69 15.1 72.3 58.1v-23.5l-64.1-51.6c-25-5.5-50-10.9-75-16.4zm-195.6.1l-74.92 16.3-64.11 51.6v23.5l72.24-58.1 69.09-15c-1.1-6.4-2-12.8-2.3-18.3zm44.4 6.6c5.6 0 10.1 4.5 10.1 10.1 0 5.5-4.5 10-10.1 10s-10.1-4.5-10.1-10c0-5.6 4.5-10.1 10.1-10.1zm107.1 0c5.6 0 10.1 4.5 10.1 10.1 0 5.5-4.5 10-10.1 10s-10.1-4.5-10.1-10c0-5.6 4.5-10.1 10.1-10.1zm-74.8 11.3c9.3 0 16.9 7.6 16.9 16.8 0 9.3-7.6 16.9-16.9 16.9-9.4 0-16.9-7.6-16.9-16.9 0-9.2 7.5-16.8 16.9-16.8zm42.5 0c9.4 0 16.9 7.6 16.9 16.8 0 9.3-7.5 16.9-16.9 16.9-9.3 0-16.9-7.6-16.9-16.9 0-9.2 7.6-16.8 16.9-16.8zm64.4 27.3c-3 5.4-6.6 10.5-10.7 15.1l51.1 27.1 27.5 51h20.9L395.6 429c-18-9.5-35.9-19.1-53.9-28.6zm-171.5.1l-54 28.5-34.82 64.7h20.82l27.5-51.1 51.2-27c-4.1-5-8-10.3-10.7-15.1zm30.2 25.3c-4.4.1-9.5 2.3-14.9 7.7-3.8 7.8-5.9 16.5-5.9 25.7 0 16.5 6.8 31.4 17.8 42.5v-4c0-20.8 7.7-39.3 19.6-50.8 0-10.8-6.7-21.2-16.5-21.1zm111.1 0c-9.8-.1-16.6 10.3-16.6 21.1 11.9 11.5 19.6 30 19.6 50.8v4c11-11.1 17.8-26 17.8-42.5 0-9.2-2.1-17.9-5.9-25.7-5.4-5.4-10.5-7.6-14.9-7.7zm-70.3 14.1c-1.6.1-3.4.9-5.3 2.8-1.4 2.8-2.1 5.9-2.1 9.2 0 5.9 2.4 11.3 6.4 15.3-.1-.5-.1-1-.1-1.5 0-7.4 2.8-14.1 7.1-18.2-.9-3.9-2.7-7.5-6-7.6zm29.7 0c-3.6 0-6 3.7-6 7.6 4.3 4.1 7.1 10.8 7.1 18.2 0 .5 0 1-.1 1.5 4-4 6.4-9.4 6.4-15.3 0-3.3-.7-6.4-2.1-9.2-1.6-1.3-3.5-2.7-5.3-2.8z",
    
    beetle: "M256 29.3c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zm-69.6 31.97L101 129.5l48.3 112.7 1.7-1.7v-5.2h.2c.5-9.3 1.6-18 3.5-26.1L123 135.1l74.6-59.77zm139.2 0l-11.2 14.06L389 135.1l-31.7 74.1c1.9 8.1 3 16.8 3.5 26.1h.2v5.2l1.7 1.7L411 129.5zM183 116.3c0 15.5 3.6 27.9 9.1 38.3 4.9-3 10.2-5.6 15.9-7.7-4.4-8.1-7-17.7-7-30.6zm128 0c0 12.9-2.6 22.5-7 30.6 5.7 2.1 11 4.7 15.9 7.7 5.5-10.4 9.1-22.8 9.1-38.3zm-55 41c-30.5 0-51.8 7.5-65.6 21.4-13 13-20.3 32.5-21.2 60 58.3 27.5 115.3 27.5 173.6 0-.9-27.5-8.2-47-21.2-60-13.8-13.9-35.1-21.4-65.6-21.4zm-120.6 98.8l-45.55 5.1c1.36 12.5 4.43 22.8 9.67 30.8zm241.2 0l35.9 35.9c5.3-8 8.4-18.3 9.7-30.8zM169 258.4v113.9c0 13.8 4.8 23 12.2 30 7.4 6.9 17.7 11.4 28.3 13.1 10.5 1.8 21.2.7 28.2-2 7.1-2.7 9.3-5.6 9.3-9.1v-86.6h18v86.6c0 3.5 2.2 6.4 9.3 9.1 7 2.7 17.7 3.8 28.2 2 10.6-1.7 20.9-6.2 28.3-13.1 7.4-7 12.2-16.2 12.2-30V258.4c-57.6 25-116.4 25-174 0zm-97.07 4.8l-46.43 5.1c1.81 25.3 11.87 50.5 26.68 71.1l34.4-34.5c-8.69-11.6-12.96-25.9-14.65-41.7zm368.17 0c-1.7 15.8-6.1 30.1-14.7 41.7l34.4 34.4c14.8-20.6 24.9-45.8 26.7-71zM151 266.1l-38.6 38.6c8.8 5.7 21.1 9.4 38.6 10.4zm210 0v49c17.5-1 29.8-4.7 38.6-10.4zM99.46 317.6l-35.77 35.8c2.08 2.2 4.23 4.4 6.43 6.4 24.66 22.9 54.18 33.3 80.88 22.8v-49.5c-22-1.1-39-6.4-51.54-15.5zm313.04 0C400 326.7 383 332 361 333.1V382.5c26.7 10.5 56.2.1 80.9-22.8 2.2-2 4.3-4.1 6.4-6.3zM183 425.4V448l34.6 34.7 12.8-12.8-29.4-29.3v-8.5c-6.1-1.5-12.3-3.7-18-6.7zm146 0c-5.7 3-11.9 5.2-18 6.7v8.5l-29.4 29.3 12.8 12.8L329 448z",
    
    grasshopper: "M261.635 85.86L247.09 96.466c21.23 29.114 69.244 55.739 112.074 79.193 4.964 2.718 9.83 5.363 14.594 7.955-9.767-3.123-19.881-6.35-30.317-9.775-26.672-8.755-54.46-18.512-77.57-29.09-23.109-10.578-41.403-22.446-48.861-32.674l-14.543 10.606c11.293 15.487 31.657 27.33 55.912 38.433 24.255 11.103 52.538 20.995 79.45 29.828 26.91 8.833 52.481 16.61 70.808 23.192 9.163 3.29 16.56 6.339 20.978 8.732 1.43.775 1.879 1.178 2.569 1.68-.44 2.39-1.41 6.243-4.782 11.303-6.575 9.761-18.197 14.277-29.384 15.49 4.176 1.229 6.886 8.01 6.88 17.219 9.784-1.672 17.722-5.09 24.008-9.342 7.844-4.62 13.311-10.662 16.674-16.664 4.461-9.639 9.002-23.26 3.248-31.955-1.703-2.47-3.74-4.467-6.115-6.506-4.751-4.078-10.966-8.21-18.477-12.776-15.022-9.133-35.145-19.788-56.427-31.443-42.565-23.31-89.902-51.696-106.174-74.012zm-114.397 24.762c-9.4 3.874-8.762 10.376-3.888 16.318 14.772 18.104 27.812 44.994 40.523 58.752a9926.19 9926.19 0 0 1 13.887 15.059c-2.567-4.963-4.868-9.385-7.864-15.219-10.224-19.909-19.95-47.74-29.648-65.207-3.197-4.244-7.41-9.635-13.01-9.703zm-30.687 20.363c-11.185 1.776-7.269 11.57-3.813 17.637 10.272 22.183 29.461 39.584 38.063 57.246 18.24 43.23 31.939 85.906 58.873 112.25a73.164 73.164 0 0 1 10.844-12.451c7.632-6.975 16.662-11.506 26.277-14.346-11.05-22.287-7.461-19.075-76.143-93.414-16.09-17.416-28.97-44.54-41.248-59.586-3.769-3.53-7.776-6.975-12.853-7.336zm-14.463 34.899L62.422 382.042l-39.764 10.867 3.229 11.045 49.888-13.002 35.383-211.057a350.858 350.858 0 0 1-9.07-14.011zm23.84 34.777l-3.473 20.711c2.635-.34 5.295-.672 7.97-1l3.016-8.492c-2.395-3.862-4.895-7.525-7.513-11.219zm152.787 11.065c-.23 7.585-1.024 14.207.398 19.38 2.012 7.321 6.792 14.234 28.57 20.516l5.694 1.643.742 5.877c1.323 10.48 3.45 21.298 7.139 31.388 6.038 2.343 9.859-.249 15.707-.43 2.519-.059 4.882.323 7.096 1.006-.11-1.585-.192-3.19-.227-4.816.92-25.278 8.112-43.763 27.992-56.736-26.79-12.354-65.704-17.266-93.111-17.828zm-18.477 15.777c-11.795.668-23.882 1.43-36.047 2.273 30.931 34.513 30.044 36.855 41.002 58.06 4.566-.45 9.15-.654 13.68-.648 4.433.006 8.808.205 13.066.522a126.809 126.809 0 0 0 8.332-4.608c-1.298-5.421-2.283-10.807-3.058-16.019-21.288-7.389-32.065-18.864-35.457-31.205-.789-2.87-1.252-5.67-1.518-8.375zm-116.218 9.389c-.565.063-1.146.12-1.71.185a1097.7 1097.7 0 0 0-22.97 2.877l-10.219 60.965c21.487 4.577 45.342 7.712 69.647 8.295-16.523-23.339-25.31-47.885-34.748-72.322zm243.205 4.591c-9.683 4.55-15.505 10.473-19.33 17.112-4.66 8.084-6.27 17.674-6.065 27.31.115 5.376.81 10.7 1.754 15.637 1.282 5.49 4.624 10.074 9.328 10.789 7.816 1.117 15.351-.584 21.184-5.463 5.832-4.88 10.597-13.285 11.35-27.947.136-2.67-.092-5.496-.589-8.352a52.415 52.415 0 0 1-.61 6.059c-2.11 13.112-8.581 22.975-14.454 22.03-5.872-.947-8.923-12.34-6.814-25.45 2.068-12.839 8.332-22.61 14.14-22.057-3.176-4.713-6.832-7.906-9.894-9.668zM68.59 248.712c-5.001 1.124-9.696 2.29-14.014 3.498-10.94 3.062-19.547 6.474-24.629 9.594-4.341 2.665-5.022 4.082-5.185 4.57.286.44.921 1.484 2.47 2.87 2.789 2.492 7.585 5.705 13.858 8.978 5.673 2.96 12.603 5.996 20.441 8.959l7.059-38.47zm362.127 25.453l-7.27 4.687c-.01.33-.01.66-.027.99a76.86 76.86 0 0 1-1.324 10.856l42.093 58.615 25.153-9.761-6.514-16.782-15.16 6.41-36.951-55.015zM282.99 305.712a154.67 154.67 0 0 0-3.642.004c-18.142.23-36.153 3.612-46.69 13.24-19.557 17.87-22.155 49.233-25.113 77.91l24.922 29.274 15.322-7.645-21.021-26.187.724-4.034c3.167-17.61 4.964-34.087 22.432-50.298l2.869-2.664 3.906.285c13.501.981 25.494 1.403 34.512-.506 8.927-1.89 14.718-5.24 19.404-13.361 1.65-3.378 1.663-5.31.98-7.598-.542-1.822-2.077-4.087-4.187-6.504-7.586-1.06-15.935-1.825-24.418-1.916zm54.399 2.385c-8.286 3.23-9.852 14.926-7.436 21.496 1.977 5.303 6.073 10.403 11.713 14.967 10.212 8.263 25.065 14.122 36.346 17.011l35.115-24.441 38.117 50.508 37.594-12.412-4.143-14.13-26.914 10.155-40.996-57.092-41.586 29.73-5.344-4.486c-11.343-9.523-19.438-22.073-25.904-27.765-3.233-2.846-5.26-3.572-6.562-3.541zm-231.25 10.605l-4.125 24.608c34.766.566 67.115-2.114 98.091-6.745a99.96 99.96 0 0 1 .782-1.986 100.748 100.748 0 0 1-4.526-4.303 173.342 173.342 0 0 1-2.836-2.968c-30.55.615-60.648-2.936-87.386-8.606zm-55.612 28.436L30.06 352.73l3.23 11.045 14.898-3.882 2.34-12.756zm209.116 6.607c-2.152 3.434-2.897 8.202-4.096 12.193l38.459 32.315 11.578-13.781-29.389-24.696 1.612-5.363c-5.934.075-12.007-.253-18.164-.668z"
  };
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg 
        viewBox="0 0 512 512" 
        className="w-2/3 h-2/3"
      >
        <path 
          d={paths[type]} 
          fill={color}
          stroke="none"
        />
      </svg>
    </div>
  );
};

const HexPiece = ({ piece, size, selected, onClick, position }) => {
    const zOffset = piece.z * 2;
    const pieceSize = selected ? size * 1.5 : size * 1.5;
    const color = piece.p === 1 ? 'rgb(59, 130, 246)' : 'rgb(239, 68, 68)';
    
    // Important: Need access to the full board to calculate stacks
    const board = piece.board || [];
    
    // Get all pieces at this position
    const stackedPieces = board.filter(p => 
      p.q === piece.q && 
      p.r === piece.r
    ).sort((a, b) => a.z - b.z);
    
    // Only render the top piece
    const isTopPiece = stackedPieces.length === 0 || 
      stackedPieces[stackedPieces.length - 1].z === piece.z;
  
    if (!isTopPiece) {
      return null;
    }
    
    return (
      <div
        className={`absolute cursor-pointer transition-transform duration-200 ${selected ? 'scale-110' : ''}`}
        style={{
          left: position.x - pieceSize/2,
          top: position.y - pieceSize/2 - zOffset,
          zIndex: piece.z * 10,
          filter: stackedPieces.length > 1 ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3))' : ''
        }}
        onClick={onClick}
      >
        {/* Main piece */}
        <Hexagon size={pieceSize} color={color} fill={color} strokeWidth={2} />
        <PieceIcon type={piece.t} color="white" />
        
        {/* Stack indicator */}
        {stackedPieces.length > 1 && (
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-0.5 rounded-full text-xs font-bold">
            +{stackedPieces.length - 1}
          </div>
        )}
      </div>
    );
  };
  
  export default HexPiece;