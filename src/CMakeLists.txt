cmake_minimum_required(VERSION 2.9)
project( ImageCompress )
find_package( OpenCV REQUIRED )
include_directories( ${OpenCV_INCLUDE_DIRS} )

add_executable( ImageCompress ImageCompress.cpp )

target_link_libraries( ImageCompress ${OpenCV_LIBS} )
