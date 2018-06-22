export default function printBinary(num) {
  if (num >= 1 || num <= 0)
		return "ERROR";

		let binary = '.';

		while (num > 0) {
			if (binary.length > 32)
				return "ERROR";

			let r = num * 2;
			if (r >= 1) {
				binary += '1';
				num = r - 1;
			} else {
				binary += '0';
				num = r;
			}
		}
		return binary;
};
