#include <opencv2/opencv.hpp>

using cv::Mat;
using cv::imread;
using cv::imwrite;
using cv::IMREAD_UNCHANGED;
using cv::INTER_CUBIC;
using cv::Size;

void compress_image(const Mat &img, unsigned src_file_size, const char *filename) {
	const unsigned file_size_lower_bound = 400 * 1024;
	const unsigned file_size_upper_bound = 600 * 1024;

	if (src_file_size < file_size_upper_bound) {
		return;
	}

	const int n = img.rows;
	const int m = img.cols;
	const double factor = sqrt( (double) src_file_size / file_size_lower_bound );

	Mat result;

	Size dsize = Size(m / factor, n / factor);

	resize(img, result, dsize, 0, 0, INTER_CUBIC);

	imwrite(filename, result);
}

int main(int argc, char *argv[]) {
	if (argc == 1) {
		const char *sources = "[source images]";
		fprintf(stderr, "Usage: %s %s\n", argv[0], sources);
		exit(0);
	}

	for (int i = 1; i < argc; i++) {
		fprintf(stderr, "compressing %s\n", argv[i]);
		Mat img = imread(argv[i], IMREAD_UNCHANGED);
		if (!img.data) {
			fprintf(stderr, "imread: could not open or find the image\n");
			exit(-1);
		}

		FILE *fp = fopen(argv[i], "rb");

		if (fp == NULL) {
			fprintf(stderr, "fopen: could not open or find the image\n");
			exit(-1);
		}

		fseek(fp, 0L, SEEK_END);
		unsigned sz = ftell(fp);

		fclose(fp);

		compress_image(img, sz, argv[i]);
	}
}
