s = int(input())
for i in range(s):
    sting=input()
    even=''
    odd=''
    for j in range (len(sting)):
        if j%2==0:
            even+=sting[j]
        else:
            odd+=sting[j]
    print('{} {}'.format(even,odd))