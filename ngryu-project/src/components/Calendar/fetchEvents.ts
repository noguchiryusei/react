// src/fetchEvents.ts
import { Events } from './Events';

// ダミーデータを返す関数（将来的にはAPIを呼び出すように調整）
export const fetchEvents = async (): Promise<Events> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        5: "DBイベントA",
        15: "DBイベントB"
      });
    }, 1000); // 1秒後にレスポンス
  });
};