function solution(participant, completion) {
  let newParticipant = participant.sort();
  let newCompletion = completion.sort();

  for (let i = 0; i < newCompletion.length; i++) {
    if (newParticipant[i] !== newCompletion[i]) {
      return newParticipant[i];
    }
  }
  return newParticipant[newParticipant.length - 1];
}
