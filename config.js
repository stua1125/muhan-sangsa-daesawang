// PROTOTYPE - NOT FOR PRODUCTION
// Question: 걸어 다니며 방마다 대사를 맞히는 구조가 그냥 문제만 푸는 퀴즈보다 한 판을 끝까지 하고 싶게 만드는가
// Date: 2026-11-11
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  pass_score: { value: 80, min: 50, max: 95, step: 5 },          // 점: 이 점수 이하면 방을 다시 푼다
  choice_time: { value: 15, min: 5, max: 40, step: 1 },          // 초: 객관식 제한시간
  type_time: { value: 30, min: 10, max: 90, step: 5 },           // 초: 주관식 제한시간
  questions_per_room: { value: 7, min: 3, max: 10, step: 1 },    // 문제 수: 방 하나에서 푸는 문제
  typed_ratio: { value: 0.3, min: 0, max: 1, step: 0.05 },       // 비율: 첫 방의 주관식 비율
  typed_ramp: { value: 0.08, min: 0, max: 0.3, step: 0.01 },     // 비율: 방이 하나 넘어갈 때마다 늘어나는 주관식 비율
  typo_slack: { value: 1, min: 0, max: 2, step: 1 },             // 글자: 주관식에서 봐주는 오타 수 (4글자 이상 답만)
  walk_speed: { value: 96, min: 40, max: 200, step: 4 },         // px/초: 걷는 속도
  talk_range: { value: 24, min: 12, max: 48, step: 2 },          // px: 말 걸기와 문 열기 거리
  intro_time: { value: 2.2, min: 0.5, max: 5, step: 0.1 },       // 초: 방 입장 연출 길이
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },
};
