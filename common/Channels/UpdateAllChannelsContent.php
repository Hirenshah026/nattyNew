<?php

namespace Common\Channels;

use App\Channel;
use Illuminate\Console\Command;

class UpdateAllChannelsContent extends Command
{
    protected $signature = 'channels:update';

    public function handle()
    {
        app(Channel::class)
            ->where('type', 'channel')
            ->limit(20)
            ->get()
            ->each(function (BaseChannel $channel) {
                $channel->updateContentFromExternal();
            });
    }
}
