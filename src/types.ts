export interface ChapterSection {
  id: string;
  anchor: string;
  number: string;
  title: string;
  shortDesc: string;
}

export const CHAPTER_SECTIONS: ChapterSection[] = [
  { id: 'sec-1', anchor: '#sec-1', number: '01', title: '什麼是高山醫學', shortDesc: '高海拔生理與身體適應本質' },
  { id: 'sec-2', anchor: '#sec-2', number: '02', title: '高海拔環境對人體的影響', shortDesc: '低氧、代償機制與個體差異' },
  { id: 'sec-3', anchor: '#sec-3', number: '03', title: '急性高山症 AMS', shortDesc: '症狀辨識與「輕微不代表安全」' },
  { id: 'sec-4', anchor: '#sec-4', number: '04', title: '高山肺水腫 HAPE', shortDesc: '肺部積水受阻與緊急下降處置' },
  { id: 'sec-5', anchor: '#sec-5', number: '05', title: '高山腦水腫 HACE', shortDesc: '神經學警訊與絕不延誤觀察' },
  { id: 'sec-6', anchor: '#sec-6', number: '06', title: '高山症預防方法', shortDesc: '循序上升與「不隱瞞不勉強」' },
  { id: 'sec-7', anchor: '#sec-7', number: '07', title: '高山環境常見健康問題', shortDesc: '失溫、脫水、疲勞與睡眠障礙' },
  { id: 'sec-8', anchor: '#sec-8', number: '08', title: '高山症的處置與下降決策', shortDesc: '決策流程與「下降是關鍵處置」' },
  { id: 'sec-9', anchor: '#sec-9', number: '09', title: '隊伍中的高山症觀察與管理', shortDesc: '領隊觀察與安全優先團隊文化' },
  { id: 'sec-10', anchor: '#sec-10', number: '10', title: '高山醫學常見錯誤觀念', shortDesc: '4組觀念思辨：安全回家才是成功' },
];
