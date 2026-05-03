class respons:
    def __inti__(self,impressive_words,prediction,five_step_chart):
        self.impressive_words:impressive_words = impressive_words
        self.prediction:prediction = prediction
        self.five_step_chart:five_step_chart = five_step_chart

class prediction:
    def __init__(self,word,reason,time):
        self.word = word
        self.reason = reason
        self.time = time

class impressive_words:
    def __init__(self,word,reason,score):
        self.word = word
        self.reason = reason
        self.score = score

class five_step_chart:
    def __init__(self,Frendship_level,Reply_speed,Kindness,Peace_of_mind,Message_length):
        self.Frendship_level = Frendship_level
        self.Reply_speed = Reply_speed
        self.Kindness = Kindness
        self.Peace_of_mind = Peace_of_mind
        self.Message_length = Message_length