"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

interface ChatMsg {
  type: 'user' | 'bot';
  content: string;
}
const responses: Record<string, string> = {
  "What's this event about?": "Season of Commits is a month-long celebration of open-source contributions. Whether you're an experienced developer, a beginner looking to make your first pull request, or someone with a project to share, this event provides resources, mentorship, and a collaborative environment to help you succeed.",
  "Who can join?": "Anyone with an interest in coding, open source, or collaboration can join! Whether you're a student, professional, or hobbyist, there's a space for you. Beginners are especially encouraged to participate and explore the world of open source.",
  "Are there any prizes?": "Yes! Participants with the highest number of quality commits will be eligible for a cash prize of 2000 INR.",
  "What do I gain from this event?": "By joining Season of Commits, you'll gain hands-on experience in open source development, build connections with like-minded contributors, and enhance your coding and collaboration skills. You'll also have the opportunity to grow your portfolio, increasing your chances of being hired.",
  "Do I need to know how to code?": "No! While code contributions are the best way to contribute, there is also a need for designers, technical writers (people who write documentation), and beta testers (people who test the project and report issues).",
  "What should I work on?": "Look for unsolved issues in the issues tab, or create a new issue with the \"question\" label if you have something specific in mind.",
  "Other help":"Mail us nexus@sjcetpalai.ac.in"
};
const msgss: string[] = [
  "What's this event about?",
  "Who can join?",
  "Are there any prizes?",
  "What do I gain from this event?",
  "Do I need to know how to code?",
  "What should I work on?",
  "Other help",
];
function ChatBot() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [Open, setOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMsg = (msg: string): void => {
    setLoading(true);
    setMessages(prev => [...prev, { type: 'user', content: msg }]);
    setTimeout(() => {
      const botResponse = responses[msg] || "Sorry, I don't have an answer for that.";
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
      setLoading(false);
    }, 1000); 
  };

  const closeChat = () => setOpen(false);

  const handleOutsideClick = (e: MouseEvent) => {
    const modal = document.getElementById('chat-modal');
    if (modal && !modal.contains(e.target as Node)) {
      closeChat();
    }
  };

  useEffect(() => {
    if (Open) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [Open]);

  return (
    <>
      <div className="fixed md:bottom-4 md:right-4 bottom-8 right-10 flex flex-col items-center">
        <Button
          className="rounded-full w-12 h-12 p-0 mb-2"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <span className="text-sm font-medium text-blue-600 animate-pulse">
          FAQ
        </span>
      </div>

      {Open && (
        <div
          id="chat-modal"
          className="fixed bottom-20 h-[80vh] md:h-[86vh] right-4 z-50 w-[80vw] md:w-full max-w-md shadow-xl"
        >
          <Card>
            <CardContent className="p-0">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold">Frequently Asked Questions</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeChat}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4">
                <div className="h-52 md:h-60 overflow-y-auto mb-4 space-y-4 scroll-smooth">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">Typing...</div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500 mb-2">Questions</p>
                  <div className="grid grid-cols-1 gap-2">
                    {msgss.map((msg, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start"
                        onClick={() => sendMsg(msg)}
                        disabled={loading}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {msg}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default ChatBot;
