#include <iostream>
#include <ctime>

using namespace std;

int main() {
    setlocale(LC_ALL,"RU");
    srand(time(nullptr));

    int a = rand() % 1000;
    cout << a << "\n";
    return 0;
}
