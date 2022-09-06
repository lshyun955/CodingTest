function solution(priorities, location) {
  var print_queue = [],
    printed_list = [];
  priorities.forEach((p, i) => print_queue.push({ index: i, priorities: p }));
  print();
  return printed_list.indexOf(location) + 1;

  function print() {
    var p = print_queue.shift();
    if (p == null) {
      return;
    }
    if (print_queue.findIndex((x) => x.priorities > p.priorities) >= 0) {
      // 우선 순위가 높은 출력물이 있음
      print_queue.push(p);
    } else {
      printed_list.push(p.index);
    }
    return print();
  }
}
