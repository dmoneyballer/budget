from json import loads
with open('state.json') as rf:
    t = loads(rf.read())
    print(t)
    # return str(t)
