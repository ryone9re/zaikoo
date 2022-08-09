FROM node:lts-alpine

ARG NEXT_PUBLIC_FIREBASE_API_KEY

ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID

ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

ARG NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID

ARG NEXT_PUBLIC_FIREBASE_APP_ID

ARG NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

ARG NEXT_PUBLIC_SERVER_URL

ENV NEXT_PUBLIC_FIREBASE_API_KEY ${NEXT_PUBLIC_FIREBASE_API_KEY}

ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}

ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID ${NEXT_PUBLIC_FIREBASE_PROJECT_ID}

ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}

ENV NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID ${NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID}

ENV NEXT_PUBLIC_FIREBASE_APP_ID ${NEXT_PUBLIC_FIREBASE_APP_ID}

ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}

ENV NEXT_PUBLIC_SERVER_URL ${NEXT_PUBLIC_SERVER_URL}

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH ${PATH /app/node_modules/.bin:$PATH}

COPY . .

RUN npm install --only=production && npm run build

RUN chmod +x ./start.sh

CMD ["./start.sh"]
