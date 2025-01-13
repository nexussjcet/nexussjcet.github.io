"use client"
import React  from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

interface chatMsg {
  type: 'user'|'bot';
  content: string;
}
const msgss: string[] = [
  "What's this event about?",
  "Who can join?",
  "Are there any prizes?",
  "what do i gain from this event?",
  "Do i need to know how to code?",
  "What should i work on?",
  "other help"
];
function ChatBot() {
  const [messages, setMessages]=useState<chatMsg[]>([]);
  const [loading, setLoading]=useState<boolean>(false);
  const [Open, setOpen]=useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    useEffect(() => {
    scrollToBottom();
  }, [messages]);
    const sendMsg=async(smg:string):Promise<void> => {
    setLoading(true);
    setMessages(prev => [...prev, {
      type: 'user',
      content: smg
    }]);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message:smg }),
      });
      const data: {response:string} = await res.json();
      setMessages(prev =>[...prev, {
        type: 'bot',
        content: data.response
      }]);
    } catch(error){
      console.error('Error:', error);
      setMessages(prev =>[...prev, {
        type: 'bot',
        content: 'Sorry,ressponse unavailble'
      }]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="fixed md:bottom-4 md:right-4 bottom-8 right-10 flex flex-col items-center">
        <Button
          className="rounded-full w-12 h-12 p-0 mb-2"
          onClick={() => setOpen(true)}>
          <MessageCircle className="w-6 h-6" />
        </Button>
        <span className="text-sm font-medium text-blue-600 animate-pulse">
          FAQ
        </span>
      </div>

      {Open && (
        <div className="fixed bottom-20 h-[80vh] md:h-[86vh] right-4 z-50 w-[80vw] md:w-full max-w-md shadow-xl">
          <Card>
            <CardContent className="p-0">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold">Frequently Asked Questions</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setOpen(false)}
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
                        message.type === 'user'?'justify-end':'justify-start'
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
                      <div className="bg-gray-100 p-3 rounded-lg">
                        Typing...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500 mb-2">Questions</p>
                  <div className="grid grid-cols-1 gap-2">
                    {msgss.map((message, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start"
                        onClick={() => sendMsg(message)}
                        disabled={loading}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {message}
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
};

export default ChatBot;