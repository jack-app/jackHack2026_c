class respons:
    def __inti__(self,impressive_words,reply_time,five_step_chart,message_time,love_meter):
        self.impressive_words:impressive_words = impressive_words
        self.reply_time:str = reply_time
        self.five_step_chart:five_step_chart = five_step_chart
        self.message_time:list = message_time
        self.love_meter:int = love_meter

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

class message_time:
    def __init__(self,message,love):
        self.message = message
        self.love = love