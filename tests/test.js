const date = require('../index')

const pendulum = new date.Pendulum(2022,10,20, 3, 4, 5);

test('Test year', () => {
  expect(pendulum.year).toBe(2022);
  expect(pendulum.year_short).toBe("22");
});

test('Test month', () => {
  expect(pendulum.month).toBe('November');
  expect(pendulum.month_short).toBe('Nov');
});

test('Test day', () => {
  expect(pendulum.day).toBe(20);
  expect(pendulum.day_padded).toBe(20);
});

test('Test hours', () => {
  expect(pendulum.hours).toBe(3);
  expect(pendulum.hours_padded).toBe("03");
});

test('Test minutes', () => {
  expect(pendulum.mins).toBe(4);
  expect(pendulum.mins_padded).toBe("04");
});

test('Test seconds', () => {
  expect(pendulum.secs).toBe(5);
  expect(pendulum.secs_padded).toBe("05");
});

test('Test format', () => {
  expect(pendulum.format()).toBe("2022 November 20");
  expect(pendulum.format('y/m/D')).toBe("22/Nov/20");
  expect(pendulum.format('y/m/d')).toBe("22/Nov/20");
  expect(pendulum.format('H:I:S')).toBe("03:04:05");
  expect(pendulum.format('h:i:s')).toBe("3:4:5");
  expect(pendulum.format('Y-M-D h:I:S')).toBe("2022-November-20 3:04:05");
});

test('Test when', () => {
  expect(pendulum.when()).toBe("2 years from now");
});
