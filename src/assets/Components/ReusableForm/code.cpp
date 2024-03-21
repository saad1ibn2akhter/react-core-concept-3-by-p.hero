#include <bits/stdc++.h>
using namespace std;

int find_digit(int num)
{
    string number = to_string(num);
    return number.size();
}

int main() {
    int test;cin>>test;
    while(test--){
        int size;cin>>size;
        vector<int>vec;
        while(size--){
            int num ;cin>>num;
            vec.push_back(num);
        }
        vector<int>solution_vec;
        // cout<<vec<<endl;
        for(int i =0;i<vec.size();i++){
            if(vec[i]>=10){
                int len = find_digit(vec[i]);
                while(len<=0){
               
                    int digit = vec[i]%10;
                    vec[i]/=10;
                    solution_vec.push_back(digit);
                }
            }
            else{
                solution_vec.push_back(vec[i]);
            }
        }
        int count =0;
        for(int n =0,m=n+1;n<solution_vec.size()-2;n++){
            if(n<m){
                count++;
            }
            else{
                count+=0;
            }
        }
        if(count == solution_vec.size()-1){
            cout<<"YES"<<endl;
        }
        else{
            cout<<"NO"<<endl;
        }
    }
    
    

    return 0;
}